interface IPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  forms: IForms;
  sprites: ISprites;
  types: ITypes[];
}

interface IForms {
  name: string;
  url: string;
}

interface ISprites {
  back_default: string | undefined;
  back_female: string | undefined;
  back_shiny: string | undefined;
  back_shiny_female: string | undefined;
  front_default: string | undefined;
  front_female: string | undefined;
  front_shiny: string | undefined;
  front_shiny_female: string | undefined;
  other: any;
  versions: any;
}

interface ITypes {
  slot: number;
  type: { name: string, url: string }
}

export default IPokemon;
