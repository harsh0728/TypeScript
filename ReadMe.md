📚 React TypeScript Cheatsheet
Common Types:

// Props
interface Props {
  name: string;
  age?: number;
  onClick: () => void;
  children: ReactNode;
}

// State
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);

// Events
onChange: (e: ChangeEvent<HTMLInputElement>) => void;
onClick: (e: MouseEvent<HTMLButtonElement>) => void;
onSubmit: (e: FormEvent<HTMLFormElement>) => void;

// Refs
const inputRef = useRef<HTMLInputElement>(null);

// useEffect
useEffect(() => {
  // effect
  return () => {
    // cleanup
  };
}, []);

// Event Types Cheatsheet
// Mouse Events
onClick: (e: MouseEvent<HTMLButtonElement>) => void;
onDoubleClick: (e: MouseEvent<HTMLDivElement>) => void;
onMouseEnter: (e: MouseEvent<HTMLDivElement>) => void;
onMouseLeave: (e: MouseEvent<HTMLDivElement>) => void;

// Form Events
onChange: (e: ChangeEvent<HTMLInputElement>) => void;
onSubmit: (e: FormEvent<HTMLFormElement>) => void;
onInput: (e: FormEvent<HTMLInputElement>) => void;

// Keyboard Events
onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
onKeyUp: (e: KeyboardEvent<HTMLInputElement>) => void;
onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;

// Focus Events
onFocus: (e: FocusEvent<HTMLInputElement>) => void;
onBlur: (e: FocusEvent<HTMLInputElement>) => void;

// Select/Textarea specific
onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;

