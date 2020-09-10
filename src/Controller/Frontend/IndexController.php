<?php

namespace App\Controller\Frontend;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;


/**
 * Class IndexController
 *
 * @package App\Controller\Frontend
 */
class IndexController extends AbstractController {
  
  /**
   * @Route("/", name="frontend:index")
   */
  public function index() {
    return $this->render('frontend/index.html.twig');
  }
}
