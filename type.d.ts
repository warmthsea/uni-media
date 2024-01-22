declare const plus: {
    /** 管理运行环境 */
    runtime:{
        /** 重启设备 */
        restart: () => void;
        /** 打开文件 */
        openURL: (url:string) => void;
        /** 退出应用程序 */
        quit: () => void;
    },
    /** 管理应用本地数据存储区 */
    storage: {
        /** 清除存储数据 */
        clear: () => void;
    },
    /** 管理应用窗口界面 */
    webview:{
        /** 关闭webview */
        close: (id:string) => void;
    }
};
declare const process: {
    env: {
        /** 环境 */
        NODE_ENV: 'development' | 'production'
    }
};

declare const uni: any;

