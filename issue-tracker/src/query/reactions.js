import { axiosGitHubGraphQL } from '../App';

const ADD_REACTION = `
  mutation ($issueId: ID!,$emoji: ReactionContent!) {
    addReaction(input:{subjectId:$issueId, content: $emoji}) {
      reaction {
        id
      }   
    }
  }
`;

export const addReactionToIssue = (issueId, emoji) => {
  return axiosGitHubGraphQL.post('', {
    query: ADD_REACTION,
    variables: { issueId, emoji },
  });
};
