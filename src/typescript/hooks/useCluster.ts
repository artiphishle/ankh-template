import { fork, isMaster, isWorker, on as clusterOn } from "cluster";
import { on as workerOn } from "process";
import { cpus } from "os";

export abstract class Cluster {
  static init() {
    if (isMaster) return this.initMaster();
    if (isWorker) return this.initWorker();
  }

  private static initMaster() {
    cpus().forEach(() => fork());
    clusterOn("exit", Cluster.logExitWorker);
  }

  private static initWorker() {
    workerOn("message", (message) => {
      console.log(`Worker ${process.pid} received message: ${message}`);
    });
  }

  private static logExitWorker(worker, code, signal) {
    console.log("[Cluster] Worker exits");
    console.log("- PID:", worker.process.pid);
    console.log("- Code:", code);
    console.log("- Signal:", signal);
  }
}
