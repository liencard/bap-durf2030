import { makeObservable, observable, action } from 'mobx';
import { v4 } from 'uuid';
import Project from './Project';
import User from './User';

class Comment {
  constructor({ id = v4(), content, user, project, timestamp }) {
    if (!project) {
      throw new Error('A message must have a group');
    }
    if (!user) {
      throw new Error('A message must have a user');
    }
    if (!content || content === '') {
      throw new Error('A message must have some content');
    }
    this.id = id;
    this.project = project;
    this.content = content;
    this.user = user;
    this.timestamp = timestamp;
  }
}

const commentConverter = {
  toFirestore: function (comment) {
    return {
      userId: comment.user.id,
      projectId: comment.project.id,
      comment: comment.content,
      name: comment.user.name,
      avatar: comment.user.avatar,
      timestamp: comment.timestamp,
      id: comment.id,
    };
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options);
    const parentGroup = snapshot.ref.parent.parent;
    const project = new Project({ id: parentGroup.id });
    const user = new User({
      id: data.userId,
      name: data.name,
      avatar: data.avatar,
    });
    return new Comment({
      id: data.id,
      content: data.comment,
      user: user,
      project: project,
      timestamp: data.timestamp,
    });
  },
};

export { commentConverter };

export default Comment;
