import { forwardRef, useImperativeHandle, useRef } from "react";

interface CustomInputHandles {
  focus: () => void;
  clear: () => void;
}

interface CustomInputProps {}

const CustomInput = forwardRef<CustomInputHandles, CustomInputProps>(
  (_, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(
      ref,
      () => ({
        focus: () => {
          inputRef.current?.focus();
        },
        clear: () => {
          inputRef.current!.value = "";
        },
      }),
      []
    );
    return (
      <input
        type="text"
        ref={inputRef}
        className="px-4 py-2 text-2xl text-black"
      />
    );
  }
);

const ChildToParent = () => {
  const inputRef = useRef<CustomInputHandles>(null);

  const handleClose = () => {
    inputRef.current?.clear();
  };

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="flex flex-col w-1/3 mx-auto">
      <CustomInput ref={inputRef} />
      <div className="flex">
        <button onClick={handleFocus}>Focus</button>
        <button onClick={handleClose}>Clear</button>
      </div>
    </div>
  );
};

export default ChildToParent;
