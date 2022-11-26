import { useLocation, useParams } from 'react-router-dom';

function getAllParamaters(params: URLSearchParams): {
  url: string | null;
  dealerName: string | null;
} {
  const url = params.get('url');
  const dealerName = params.get('dealerName');
  return { url, dealerName };
}

export function GetParams(): void {
  const { id } = useParams();

  // *****Get params from URL*****
  const urlCalled = new URLSearchParams(useLocation().search);
  const { url, dealerName } = getAllParamaters(urlCalled);
}
