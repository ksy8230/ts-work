{
  type PageInfo = {
    title: string;
  };
  type Page = 'home' | 'about' | 'contact';

  const nav: Record<Page, PageInfo> = {
    home: {
      title: 'home',
    },
    about: {
      title: 'about',
    },
    contact: {
      title: 'contact',
    },
  };
  console.log(nav);
}

/**
 * Record<A, B>
 * A와 B를 연결하고 싶을 때 사용
 */
