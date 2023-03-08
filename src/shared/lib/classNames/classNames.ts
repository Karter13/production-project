export type Mods = Record<string, boolean | string | undefined>

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: Array<string | undefined> = [],
): string {
    const filterMods = Object.entries(mods)
        .filter(([className, value]) => Boolean(value))
        .map(([className]) => className);

    return [
        cls,
        ...additional.filter(Boolean),
        ...filterMods,
    ].join(' ');
}
