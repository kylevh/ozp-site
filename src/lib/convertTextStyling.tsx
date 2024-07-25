export function convertTextStyling(description: string): JSX.Element {
  const parts = description.split(/(\*\*[^*]+\*\*)|(\n)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part === "\n") {
          return <div className="my-4" key={index}></div>;
        }
        if (part && part.startsWith("**") && part.endsWith("**")) {
          return (
            <span key={index} className="text-[#B378FF]">
              {part.slice(2, -2)}
            </span>
          );
        }
        return part;
      })}
    </>
  );
}
