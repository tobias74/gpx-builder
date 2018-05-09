// @flow
import type { Bounds as BoundsData } from './../../types';

export default class Bounds {
    minlat: number;
    minlon: number;
    maxlat: number;
    maxlon: number;

    constructor(minlat: number, minlon: number, maxlat: number, maxlon: number) {
        this.minlat = minlat;
        this.minlon = minlon;
        this.maxlat = maxlat;
        this.maxlon = maxlon;
    }

    toObject(): BoundsData {
        const {
            minlat,
            minlon,
            maxlat,
            maxlon,
        } = this;

        return {
            attributes: {
                minlat,
                minlon,
                maxlat,
                maxlon,
            },
        };
    }
}
