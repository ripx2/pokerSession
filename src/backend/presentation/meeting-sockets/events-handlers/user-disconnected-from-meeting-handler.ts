import { singleton } from 'tsyringe'
import {
  type GenericSocket,
  type SocketCallback,
  SocketEventHandler,
} from '../../sockets'
import { Logger } from '../../logger'
import { UserDisconnectedFromMeeting } from '~/backend/application/use-cases/user-disconnected-from-meeting'
import {
  UserDisconnectedFromMeetingDtoValidator,
  type UserDisconnectedFromMeetingDto,
} from '@application'

@singleton()
export class UserDisconnectedFromMeetingHandler extends SocketEventHandler<
  UserDisconnectedFromMeetingDto,
  void
> {
  constructor(
    private userDisconnectedFromMeeting: UserDisconnectedFromMeeting
  ) {
    super(new Logger(UserDisconnectedFromMeetingHandler))
  }
  protected handle(
    socket: GenericSocket,
    request: UserDisconnectedFromMeetingDto,
    callback: SocketCallback<void>
  ): Promise<void> {
    return this.handleWithUseCase({
      socket,
      request,
      callback,
      requestValidator: UserDisconnectedFromMeetingDtoValidator,
      useCase: this.userDisconnectedFromMeeting,
    })
  }
}


