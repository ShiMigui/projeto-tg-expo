import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CalculatorButton from '../../components/calculatorButton/CalculatorButton';
import Display from '../../components/display/Display';
import Card from '../../components/card/Card';

const OPERATORS = ['+', '-', 'X', '/'] as const;

type Operator = (typeof OPERATORS)[number];

type CalculatorState = {
  display: string;
  previousValue: number | null;
  operator: Operator | null;
  waitingOperand: boolean;
};

const INITIAL_STATE: CalculatorState = {
  display: '0',
  previousValue: null,
  operator: null,
  waitingOperand: false,
};

const ERROR_STATE: CalculatorState = {
  display: 'Error',
  previousValue: null,
  operator: null,
  waitingOperand: true,
};

function isOperatorToken(token: string): boolean {
  return (OPERATORS as readonly string[]).includes(token);
}

function endsWithOperator(expression: string): boolean {
  return isOperatorToken(expression.trimEnd().split(' ').pop() ?? '');
}

function currentOperand(expression: string): string | null {
  const parts = expression.trimEnd().split(' ');
  const token = parts[parts.length - 1] ?? '';
  if (parts.length > 1 && isOperatorToken(token)) {
    return null;
  }
  return token === '' ? null : token;
}

function parseOperand(operand: string | null): number {
  return operand === null ? 0 : parseFloat(operand);
}

function calculate(a: number, b: number, operator: Operator): number {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case 'X':
      return a * b;
    case '/':
      return b === 0 ? NaN : a / b;
  }
}

function formatResult(value: number): string {
  return String(Number(value.toPrecision(12)));
}

export default function Calculator() {
  const [calculator, setCalculator] = useState<CalculatorState>(INITIAL_STATE);
  const { display } = calculator;

  function clearEntry() {
    setCalculator((current) => {
      if (current.display === 'Error') {
        return { ...INITIAL_STATE };
      }

      const trimmed = current.display.trimEnd();
      const parts = trimmed.split(' ');
      const last = parts[parts.length - 1];

      if (parts.length > 1 && !isOperatorToken(last)) {
        return {
          ...current,
          display: `${trimmed.slice(0, -(last.length + 1))} `,
          waitingOperand: true,
        };
      }

      return { ...current, display: '0', waitingOperand: false };
    });
  }

  function inputDigit(digit: string) {
    setCalculator((current) => {
      if (!current.waitingOperand) {
        const operand = currentOperand(current.display);

        if (operand === '0') {
          return { ...current, display: `${current.display.slice(0, -1)}${digit}` };
        }

        return { ...current, display: `${current.display}${digit}` };
      }

      if (endsWithOperator(current.display)) {
        return { ...current, display: `${current.display}${digit}`, waitingOperand: false };
      }

      return { ...current, display: digit, waitingOperand: false };
    });
  }

  function inputDecimalPoint() {
    setCalculator((current) => {
      if (current.waitingOperand && endsWithOperator(current.display)) {
        return { ...current, display: `${current.display}0.`, waitingOperand: false };
      }

      if (current.waitingOperand) {
        return { ...current, display: '0.', waitingOperand: false };
      }

      const operand = currentOperand(current.display) ?? '';

      if (operand.includes('.')) {
        return current;
      }

      return { ...current, display: `${current.display}.`, waitingOperand: false };
    });
  }

  function chooseOperator(nextOperator: Operator) {
    setCalculator((current) => {
      if (current.display === 'Error') {
        return current;
      }

      if (current.waitingOperand && endsWithOperator(current.display)) {
        return {
          ...current,
          display: `${current.display.trimEnd().slice(0, -1)}${nextOperator} `,
          operator: nextOperator,
        };
      }

      const operand = parseOperand(currentOperand(current.display));

      if (current.previousValue !== null && current.operator !== null) {
        if (current.waitingOperand) {
          return {
            ...current,
            display: `${current.display} ${nextOperator} `,
            previousValue: parseOperand(current.display),
            operator: nextOperator,
          };
        }

        const result = calculate(current.previousValue, operand, current.operator);

        if (Number.isNaN(result)) {
          return ERROR_STATE;
        }

        return {
          display: `${current.display} ${nextOperator} `,
          previousValue: result,
          operator: nextOperator,
          waitingOperand: true,
        };
      }

      return {
        display: `${current.display} ${nextOperator} `,
        previousValue: operand,
        operator: nextOperator,
        waitingOperand: true,
      };
    });
  }

  function evaluate() {
    setCalculator((current) => {
      if (current.display === 'Error') {
        return current;
      }

      const operand = parseOperand(currentOperand(current.display));

      if (current.operator !== null && current.previousValue !== null) {
        const result = calculate(current.previousValue, operand, current.operator);

        if (Number.isNaN(result)) {
          return ERROR_STATE;
        }

        return {
          display: formatResult(result),
          previousValue: null,
          operator: null,
          waitingOperand: true,
        };
      }

      return { ...current, display: formatResult(operand), waitingOperand: true };
    });
  }

  return (
    <Card style={styles.card}>
      <View style={styles.calculator}>
        <Display value={display} />
        <View style={styles.row}>
          <CalculatorButton variant="secondary" onPress={clearEntry}>
            C
          </CalculatorButton>
        </View>
        <View style={styles.row}>
          <CalculatorButton onPress={() => inputDigit('7')}>7</CalculatorButton>
          <CalculatorButton onPress={() => inputDigit('8')}>8</CalculatorButton>
          <CalculatorButton onPress={() => inputDigit('9')}>9</CalculatorButton>
          <CalculatorButton variant="tertiary" onPress={() => chooseOperator('/')}>
            /
          </CalculatorButton>
        </View>
        <View style={styles.row}>
          <CalculatorButton onPress={() => inputDigit('4')}>4</CalculatorButton>
          <CalculatorButton onPress={() => inputDigit('5')}>5</CalculatorButton>
          <CalculatorButton onPress={() => inputDigit('6')}>6</CalculatorButton>
          <CalculatorButton variant="tertiary" onPress={() => chooseOperator('X')}>
            X
          </CalculatorButton>
        </View>
        <View style={styles.row}>
          <CalculatorButton onPress={() => inputDigit('1')}>1</CalculatorButton>
          <CalculatorButton onPress={() => inputDigit('2')}>2</CalculatorButton>
          <CalculatorButton onPress={() => inputDigit('3')}>3</CalculatorButton>
          <CalculatorButton variant="tertiary" onPress={() => chooseOperator('-')}>
            -
          </CalculatorButton>
        </View>
        <View style={styles.row}>
          <CalculatorButton variant="tertiary" onPress={inputDecimalPoint}>
            .
          </CalculatorButton>
          <CalculatorButton onPress={() => inputDigit('0')}>0</CalculatorButton>
          <CalculatorButton variant="tertiary" onPress={() => chooseOperator('+')}>
            +
          </CalculatorButton>
          <CalculatorButton variant="secondary" onPress={evaluate}>
            =
          </CalculatorButton>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 24,
  },
  calculator: {
    width: '100%',
    maxWidth: 320,
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
  },
});
