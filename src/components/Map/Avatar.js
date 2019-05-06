import React from 'react';

const Avatar = user => <img className="avatar" alt={`${user.name} Avatar`} src={user.avatar} />;

export default Avatar;
