import React from "react";

import { CommentInputContainer as CommentInput } from "#/episodes/comments/components/comment-input/comment-input.container";
import { CommentListContainer as CommentList } from "#/episodes/comments/components/comment-list/comment-list.container";
import { CommentRepliesModalContainer as CommentRepliesModal } from "#/episodes/comments/components/comment-replies-modal/comment-replies-modal.container";
import { CommentReplyModalContainer as CommentReplyModal } from "#/episodes/comments/components/comment-reply-modal/comment-reply-modal.container";

export function CommentBoxContainer() {
  return (
    <>
      <CommentInput />
      <CommentList />
      <CommentRepliesModal />
      <CommentReplyModal />
    </>
  );
}
