const Header: React.FC = () => {
  return (
    <header className="relative h-48 w-full bg-[var(--grayLight)] p-4 flex items-center justify-center">
      {/* Título Centrando Absoluto */}
      <h1 className="text-4xl font-bold tracking-wide">
        Inditex Row Experience
      </h1>
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <img
          src="./images/avatar.png"
          alt="avatar"
          className="h-10 w-10 rounded-full border border-gray-300"
        />
        <span className="text-sm text-[var(--primary)] font-medium">
          angelhpascual
        </span>
      </div>
    </header>
  )
}

export default Header
