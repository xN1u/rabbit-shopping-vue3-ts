/// <reference types="vite/client" />
import type { MessageHandler, MessageOptions } from 'element-plus'

declare global {
  // 声明 ElMessage 全局函数的类型
  const ElMessage: {
    (options: MessageOptions): MessageHandler
    success: (message: string | MessageOptions) => MessageHandler
    warning: (message: string | MessageOptions) => MessageHandler
    info: (message: string | MessageOptions) => MessageHandler
    error: (message: string | MessageOptions) => MessageHandler
  }
}

// 确保该文件被视为模块
export {}
