export type ButtonProps = React.HTMLProps<HTMLButtonElement> & { loading?: boolean }

export function Button({onClick, children, loading, className}: ButtonProps) {
    return <button className={`px-4 py-2 bg-main rounded-xl transition-all duration-150 hover:rounded-3xl hover:bg-amber-500 ${className}`} onClick={onClick} type={'button'} disabled={loading}>{loading ? '...loading' : children}</button>
}