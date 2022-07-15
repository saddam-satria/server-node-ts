import Logger from '../config/logger';
import { ILogging } from '../interfaces/logging';
import { join } from 'path';
import fs from 'fs';
import { BASE_PATH } from '../config/utils/constant';

const writeLogToTxt = (fileName: string, data: string[]) => {
  if (!fs.existsSync(join(BASE_PATH, 'logs'))) {
    fs.mkdir(join(BASE_PATH, 'logs'), (error) => {
      if (error) throw error;
    });
  }

  fs.appendFile(
    join(BASE_PATH, 'logs', `${fileName}.txt`),
    `${new Date().toISOString()}\t${data.join('\t')}\n`,
    (error) => {
      if (error) throw error;
    }
  );
};

class ServerLog extends Logger implements ILogging {
  public setLog(...logs: string[]) {
    this.emit('server', ...logs);
  }
  public getLog() {
    this.on('server', (...logs: string[]) => {
      writeLogToTxt('server-log', logs);
    });
  }
}

class DatabaseLog extends Logger implements ILogging {
  public setLog(...logs: string[]) {
    this.emit('database', ...logs);
  }
  public getLog() {
    this.on('database', (...logs: string[]) => {
      writeLogToTxt('database-log', logs);
    });
  }
}

export { ServerLog, DatabaseLog };
