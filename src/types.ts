export type Hex = `0x${string}`;
export type Base64 = string;

export type TransactionTagPrefix = "TX";
export type BlockTagPrefix = "BLOCK";

export type TaggedBase64Prefix = TransactionTagPrefix | BlockTagPrefix;

export type TaggedBase64<T extends TaggedBase64Prefix> = `${T}~${string}`;

export type Transaction = {
  // todo: what is the role of namespace?
  namespace: number;
  payload: Base64;
};
