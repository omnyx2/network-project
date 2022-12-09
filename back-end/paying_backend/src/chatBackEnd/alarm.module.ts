import { Module } from '@nestjs/common';
import { AlarmGateway } from './alarm.gateway';
import { ChatController } from './alarm.controller';

@Module({
    providers: [AlarmGateway],
    controllers: [ChatController],
    exports : [AlarmGateway],
})
export class ChatBackEndModule {}
