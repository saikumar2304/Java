import { stringMethods } from './StringMethods';
import { booleanMethods } from './BooleanMethods';
import { numberMethods } from './NumberMethods';
import { arrayMethods } from './ArrayMethods';
import { listMethods } from './ListMethods';
import { setMethods } from './SetMethods';
import { mapMethods } from './MapMethods';
import { characterMethods } from './CharacterMethods';
import { dateMethods } from './DateMethods';
import { collectionMethods } from './CollectionMethods';
import { streamMethods } from './StreamMethods';
import { optionalMethods } from './OptionalMethods';

export const javaTypes = [
  stringMethods,
  characterMethods,
  booleanMethods,
  numberMethods,
  arrayMethods,
  listMethods,
  setMethods,
  mapMethods,
  dateMethods,
  collectionMethods,
  streamMethods,
  optionalMethods
];

export type JavaType = {
  name: string;
  description: string;
  methods: Method[];
};

export type Method = {
  name: string;
  description: string;
  example: string;
  category?: string;
  typeName?: string;
};