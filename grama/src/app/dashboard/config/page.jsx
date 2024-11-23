import SelectTheme from "@/components/SelectTheme";

function Config() {
  return (
    <div className="w-full flex flex-col text-[var(--text-color)] bg-[var(--background)] mt-4 px-2">
      <h1>Configurações</h1>

      <div className="flex mt-4 items-center gap-3">
        <h3>Temas: </h3>
        <SelectTheme />
      </div>
    </div>
  )
}

export default Config;
