export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="root-template">
    breadcrumb
    {children}
    </div>;
}
