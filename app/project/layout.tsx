import LoginRequestModal from "../my-page/_components/LoginRequestModal";

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LoginRequestModal />
      {children}
    </>
  );
}
