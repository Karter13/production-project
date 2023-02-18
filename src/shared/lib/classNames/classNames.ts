type Mods = Record<string, boolean | string>

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: string[] = [],
): string {
    // @ts-ignore
    const filterMods = Object.entries(mods)
        .filter(([className, value]) => Boolean(value))
        .map(([className]) => className);

    return [
        cls,
        ...additional.filter(Boolean),
        ...filterMods,
    ].join(' ');
}
