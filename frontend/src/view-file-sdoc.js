import React, { Suspense } from 'react';
import ReactDom from 'react-dom';
import { SimpleEditor } from '@seafile/sdoc-editor';
import { I18nextProvider } from 'react-i18next';
import i18n from './_i18n/i18n-sdoc-editor';
import Loading from './components/loading';

const { serviceURL } = window.app.config;
const { repoID, docPath, docName, docUuid, seadocAccessToken, seadocServerUrl, username } = window.app.pageOptions;

window.seafile = {
  repoID,
  docPath,
  docName,
  docUuid,
  isOpenSocket: true,
  serviceUrl: serviceURL,
  accessToken: seadocAccessToken,
  sdocServer: seadocServerUrl,
  username,
};

ReactDom.render(
  <I18nextProvider i18n={ i18n } >
    <Suspense fallback={<Loading />}>
      <SimpleEditor />
    </Suspense>
  </I18nextProvider>,
  document.getElementById('wrapper')
);