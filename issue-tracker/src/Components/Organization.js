import React from 'react';
import Repository from './Repository';

const Organization = ({
  organization,
  errors,
  onFetchMoreIssues,
  onStarRepository,
  onReactionIssue,
}) => {
  if (errors) {
    return (
      <p>
        <strong>Something went wrong:</strong>
        {errors.map((error) => error.message).join(' ')}
      </p>
    );
  }
  return (
    <div>
      <div>
        <img src={organization.avatarUrl} alt={organization.name} />
        <strong>Issues from </strong>
        <a href={organization.url}>{organization.name}</a>
      </div>
      <Repository
        repository={organization.repository}
        onFetchMoreIssues={onFetchMoreIssues}
        onStarRepository={onStarRepository}
        onReactionIssue={onReactionIssue}
      />
    </div>
  );
};

export default Organization;
