exports.REGEX_VALID_URL = new RegExp(
  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
  'gm'
);

exports.REGEX_CONTENT_TYPE_IMAGE = new RegExp("image\/.*", "i");

exports.REGEX_CONTENT_TYPE_AUDIO = new RegExp("audio\/.*", "i");

exports.REGEX_CONTENT_TYPE_VIDEO = new RegExp("video\/.*", "i");

exports.REGEX_CONTENT_TYPE_TEXT = new RegExp("text\/.*", "i");

exports.REGEX_CONTENT_TYPE_APPLICATION = new RegExp("application\/.*", "i");
