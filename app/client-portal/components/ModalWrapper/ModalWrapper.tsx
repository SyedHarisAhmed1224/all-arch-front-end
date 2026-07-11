const ModalWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80" />

            <div className="relative w-fit max-w-[90vw] max-h-[90vh] md:overflow-y-hidden">
                {children}
            </div>
        </div>
    )
}

export default ModalWrapper