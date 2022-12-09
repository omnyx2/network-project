import { Controller, Get, Param, Render} from '@nestjs/common';
import { AlarmGateway } from './alarm.gateway';
@Controller('Alarm')
export class ChatController {
    constructor(private gd:AlarmGateway){
        this.gd = gd;
    }

    
    @Get()
    @Render('index')
    francchi() {
        return { message: 'Hello world!' };
    }
    
    @Get("/test/sendmessage")
    @Render('index')
    alarmtester() {
        this.gd.server.emit('getMessage', {message:"message"} )
    }
}
