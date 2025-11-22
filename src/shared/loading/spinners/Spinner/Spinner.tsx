export const Spinner = ({ text }: { text?: string }) => (
  <div className="flex justify-center">
    <div className="flex flex-col items-center gap-2">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      {text ? <p className="text-sm text-muted-foreground">{text}</p> : null}
    </div>
  </div>
);

