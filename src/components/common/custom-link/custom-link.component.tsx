import { useRouter } from 'next/navigation';

const CustomLink = (props: any) => {
  const router = useRouter();
  const linkHref = props.href;

  function customLinkOnClick(e: any) {
    e.preventDefault();
    router.push(linkHref);
  }

  return (
    <a href={linkHref} onClick={customLinkOnClick}>
      {props.children}
    </a>
  );
}

export default CustomLink;
