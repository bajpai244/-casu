import type { Hex } from "../types"

export type SequencerConfig = {
    apiVersion: string
}

export interface ISequencer {
    // Status APIs
    getBlockHeight() : Hex
    getSuccessRate(): number
    getTimeSinceLastDecide(): number
    getMetrics(): string




    getApiVersion(): string

    setUrl(url: string) : void
    getUrl(url: string): void
}
