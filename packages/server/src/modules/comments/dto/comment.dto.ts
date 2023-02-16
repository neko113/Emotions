import { Expose, Type } from 'class-transformer';
import { UserDto } from '~/modules/users/dto';

export class CommentDto {
  @Expose()
  id: string;

  @Expose()
  text: string;

  @Expose()
  likes: number;

  @Expose()
  subcommentsCount: number;

  @Expose()
  userId: string;

  @Expose()
  postId: string;

  @Expose()
  parentCommentId: string | null;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  @Expose()
  deletedAt: Date | null;

  @Expose()
  @Type(() => UserDto)
  user: UserDto;

  @Expose()
  isLiked: boolean;

  @Expose()
  isDeleted: boolean;

  @Expose()
  @Type(() => CommentDto)
  subcomments: CommentDto[];
}