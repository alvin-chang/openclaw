// Enhanced concurrency infrastructure for OpenClaw
// Provides improved concurrency while maintaining file safety

// Export file locking utilities
export { fileLocker } from "./infra/file-locker.js";

// Export workspace isolation utilities
export { workspaceManager, runInAgentWorkspace } from "./agents/workspace-isolation.js";

// Export selective concurrency utilities
export {
  selectiveConcurrency,
  executeWithSelectiveConcurrency,
  executeMultipleWithSelectiveConcurrency,
  type OperationType,
  type Operation,
} from "./utils/selective-concurrency.js";

// Export smart queuing utilities
export {
  smartQueue,
  addToSmartQueue,
  executeWithFileTracking,
  type QueuePriority,
  type OperationStatus,
  type QueueItem,
} from "./agents/smart-queuing.js";

console.log("Enhanced concurrency infrastructure loaded successfully.");
