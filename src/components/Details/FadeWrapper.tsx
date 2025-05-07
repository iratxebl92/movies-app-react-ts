export const FadeWrapper = ({ children, visible }: { children: React.ReactNode; visible: boolean }) => (
    <div
      className={`
        absolute inset-0 transition-opacity duration-500
        ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
    >
      {children}
    </div>
  );