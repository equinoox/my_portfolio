type LoaderProps = {
  /** Sizing/border classes, e.g. "h-4 w-4 border-2". Defaults to a small inline spinner. */
  className?: string;
};

/** Generic spinner. Inherits color from `currentColor` — set text color on a parent. */
export function Loader({ className = "h-4 w-4 border-2" }: LoaderProps) {
  return (
    <span
      role="status"
      aria-label="Loading"
      className={`inline-block animate-spin rounded-full border-current border-t-transparent ${className}`}
    />
  );
}
