import { IsNotEmpty, IsString } from 'class-validator'

export interface UserDisconnectedFromMeetingDto {
  meetingId: string
}

export class UserDisconnectedFromMeetingDtoValidator
  implements UserDisconnectedFromMeetingDto
{
  @IsString()
  @IsNotEmpty()
  meetingId: string = ''
}
