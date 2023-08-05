'use client'
import { QuestionContext } from '@/context/QuestionsContext';
import { useContext, useState } from 'react';
import { transpileModule, ModuleKind } from 'typescript';

const Result = () => {
  const { fileContent } = useContext(QuestionContext);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  const runUserCode = () => {
    try {
      setConsoleOutput([]);
      const customConsoleLog = (...args: any[]) => {
        setConsoleOutput(prevOutput => [
          ...prevOutput,
          args.map(arg => (typeof arg === 'object' ? JSON.stringify(arg) : arg)).join(' '),
        ]);
      };

      const originalConsole = { ...console };
      const transpiledCode = transpileModule(
        `
          (function(setConsoleOutput) {
            const console = {
              ...${JSON.stringify(originalConsole)}, // Restore original console functions
              log: ${customConsoleLog}, // Add customConsoleLog function
            };
            ${fileContent}
          })(arguments[0]);
        `,
        { compilerOptions: { module: ModuleKind.CommonJS } }
      ).outputText;

      const executeCode = new Function('setConsoleOutput', transpiledCode);
      executeCode(setConsoleOutput);
    } catch (error: any) {
      setConsoleOutput(prevOutput => [...prevOutput, 'Erro ao executar: ' + error.message]);
    }
  };

  return (
    <div className="response">
      <button onClick={runUserCode}>Execute</button>
      <div id="console">
        {consoleOutput.map((output, index) => (
          <p key={index}>{output}</p>
        ))}
      </div>
    </div>
  );
};

export default Result;
