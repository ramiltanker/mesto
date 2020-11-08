import {avatarRedactImage} from './constans.js';

export function visibleAvatarRedactImage() {
    avatarRedactImage.classList.add('profile__avatar-redact-image_visible');
  }

export function hideAvatarRedactImage() {
    avatarRedactImage.classList.remove('profile__avatar-redact-image_visible');
  }