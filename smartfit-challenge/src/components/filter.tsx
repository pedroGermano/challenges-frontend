const Filter = () => {
  return (
    <div className="px-5">
      <div className="p-5 border-2 border-solid rounded-lg border-opacity-35 border-brand-lightGrey">
        <div className="flex items-center gap-2">
          <img width={24} src="/icon-hour.png" alt="icon" />
          <p className="text-brand-lightGrey">Horário</p>
        </div>

        <h2 className="pb-4 mt-5 text-2xl border-b border-solid text-brand-lightGrey border-lightGrey border-opacity-35">
          Qual período quer treinar?
        </h2>

        <div className="flex flex-col gap-5 mt-5">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <input
                type="radio"
                name="period"
                id="morning"
                value="morning"
                className="w-4"
              />
              <label htmlFor="morning" className="text-brand-lightGrey">
                Manhã
              </label>
            </div>

            <p>06:00 às 12:00</p>
          </div>
        </div>

        <div className="flex justify-between border-solid border-y border-brand-lightGrey">
          <div className="flex gap-2">
            <input
              type="radio"
              id="afternoon"
              name="period"
              value="afternoon"
              className="w-4"

            />
            <label htmlFor="afternoon" className="text-brand-lightGrey">
              Tarde
            </label>
          </div>
          <p>12:01 às 18:00</p>
        </div>

        <div className="flex justify-between mt-5">
          <div className="flex gap-2">
            <input type="radio" id="evening" value="evening" />
            <label htmlFor="evening" className="text-brand-lightGrey">
              Noite
            </label>
          </div>
          <p>18:01 às 23:00</p>
        </div>
      </div>
    </div>
  );
};

export default Filter;
