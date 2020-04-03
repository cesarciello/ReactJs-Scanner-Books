import Quagga from 'quagga';
import PropTypes from 'prop-types';
import React, { useEffect, useCallback } from 'react';
import { Video, Container, ScanMarker } from './styles';
import { validateIsbn } from '../../../services/books';
import ScanMaker from '../../../assets/images/scan-marker.svg'

function Scanner({ onScan }) {
  let scannerAttemps = 0;

  const onDetected = useCallback(result => {
    Quagga.offDetected(onDetected);
    const isbn = result.codeResult.code;

    if (validateIsbn(isbn)) {
      console.log(`${isbn} valido: ${validateIsbn(isbn)}`);
      onScan(isbn);
      return;
    } else {
      if (scannerAttemps >= 5) {
        alert('Não foi possivel identificar o livro!');
      }
      scannerAttemps++;
      Quagga.onDetected(onDetected);
    }
  }, [onScan, scannerAttemps]);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      Quagga.init(
        {
          inputStream: {
            name: 'Live',
            type: 'LiveStream',
            target: document.querySelector('#video'),
            constraints: {
              facingMode: 'environment',
            },
          },
          numOfWorkers: 4,
          locate: true,
          decoder: {
            readers: ['ean_reader'],
          },
        },
        err => {
          if (err) {
            console.log(err);
            alert('Erro ao abrir a camera do dispositivo!');
            return;
          }
          Quagga.start();
        },
        Quagga.onDetected(onDetected)
      );
    }
  }, [onDetected]);

  return (
    <>
      <Video id="video" />
      <Container>
        <ScanMarker>
          <img
            src={ScanMaker}
            height="260"
            width="260"
            alt="Scan Marker"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <p className="label">Aponte para o código de barras do livro</p>
        </ScanMarker>
      </Container>
    </>
  );
}

Scanner.propTypes = {
  onScan: PropTypes.func
}

export default Scanner;
