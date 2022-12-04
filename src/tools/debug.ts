export const consoleDebug = (info: unknown, type: 'log' | 'dir' = 'log') => {
    // En el browser (process not defined)
    // o en Node en desarrollo (NODE_ENV === 'development')
    // se muestran los mensajes de consola
    try {
        if (info instanceof Error) throw info;
        if (process.env.NODE_ENV === 'development') {
            console[type](info);
        }
    } catch (error) {
        console[type](info);
    }
};
