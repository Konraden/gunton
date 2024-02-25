type Props = {
  children: JSX.Element;
};

function AppPage(props: Props) {
  return <div className={'app-page-wrapper'}>{props.children}</div>;
}

export default AppPage;
