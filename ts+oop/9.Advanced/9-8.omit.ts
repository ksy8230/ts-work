{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Omit<Video, 'url' | 'another' | 'title'>;

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-data..',
    };
  }
  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      data: 'data',
    };
  }
}

/**
 * type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
 * T 타입을 가져와서 T에 있는 K를 제외한 것만 선택하고
 * 지정한 타입에서 특정 타입만 제외시키고 지정해 주고 싶을 때 사용한다
 */
