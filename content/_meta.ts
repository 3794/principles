import type { MetaRecord } from "nextra";

/**
 * type MetaRecordValue =
 *  | TitleSchema
 *  | PageItemSchema
 *  | SeparatorSchema
 *  | MenuSchema
 *
 * type MetaRecord = Record<string, MetaRecordValue>
 **/
const meta: MetaRecord = {
  generic: {
    title: "Generic",
  },
  modules: {
    title: "Modules",
  },
  concepts: {
    title: "Concepts",
  },
};

export default meta;
