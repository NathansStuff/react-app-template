export interface IBaseTemplate {
  sampleTextProp: string;
}

export function BaseTemplate({ sampleTextProp }: IBaseTemplate): JSX.Element {
  return (
    <div data-testid='baseTemplate' className=' bg-slate-600 '>
      <h1 className='text-3xl text-lime-800'>{sampleTextProp}</h1>
    </div>
  );
}
