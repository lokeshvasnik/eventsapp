const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex justify-center items-center flex-center min-h-screen w-full bg-primary-500 bg-cover bg-center bg-fixed bg-dotted-pattern">
            {children}
        </div>
    );
};

export default Layout;
