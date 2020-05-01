export const EventEmitterServiceFunctions = {
    lorem: 123,
    darkMode: (enableDarkMode: boolean): void => { document.body.classList.toggle('dark', enableDarkMode) },
}

export function EventEmitterServiceRunner(func: string, param: any) {
    const hasFunction = EventEmitterServiceFunctions.hasOwnProperty(func)
    if (hasFunction) {
        EventEmitterServiceFunctions[func](param);
    }
}



